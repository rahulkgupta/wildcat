import { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosResponse } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const GtfsRealtimeBindings = require('gtfs-realtime-bindings');

const TOKENS = [
  'd18dbf6c-b4cc-40dc-a0c7-aeb29bd25bc1',
  '5aee2597-0f45-4c92-be53-4b5ce2a00498',
  '42eb7cef-dafe-4930-b8f5-5995bf6fad20',
  '832d7926-5329-492c-8e76-44094cd3bf63',
  '06796295-7917-4438-a4f7-76c640306dae',
  'fa65f558-4c2e-4b74-a949-1d9ca4d66ea2',
  'ae8f1a09-e94b-4a10-ba67-e40201fcbf2b',
  '5649837d-4c41-43ef-b76d-b0b95d2ad52d',
  'dd5f2a93-265e-4797-b47a-a71b1145f343',
  '53146aab-a39e-4433-8a9c-c525127aa0d5',
  'c30da43f-0743-4132-a387-b8239d55be9b',
  'e76071b1-fe46-4ef7-9166-0f5e8a4cbcd3',
  '4d018429-64c1-438a-9038-11404d658f11',
  'c355cd0d-4939-4021-af34-d6fff0c99adc',
  '4d018429-64c1-438a-9038-11404d658f11',
];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

const cache: any = {};
let lastFetch: number;

const AGENCIES = [
  // '3D',
  'AC',
  'AM',
  'BA',
  // 'CC',
  // 'CE',
  // 'CM',
  'CT',
  // 'DE',
  'EM',
  // 'FS',
  // 'GF',
  'GG',
  // 'MA',
  // 'PE',
  // 'RG',
  // 'RV',
  'SA',
  // 'SB',
  'SC',
  'SF',
  // 'SI',
  'SM',
  // 'SO',
  // 'SR',
  // 'SS',
  // 'ST',
  // 'TD',
  // 'UC',
  // 'VC',
  // 'VN',
  'WC',
  // 'WH',
];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  const currentTime = Date.now();
  if (lastFetch == undefined || Math.floor((currentTime - lastFetch) / 1000) > 10) {
    const requests: Promise<any>[] = [];
    AGENCIES.map((agency) => {
      requests.push(
        axios({
          method: 'get',
          url: `http://api.511.org/transit/vehiclepositions?api_key=${
            TOKENS[getRandomInt(TOKENS.length)]
          }&agency=${agency}`,
          responseType: 'arraybuffer',
        }),
      );
    });
    const results = await Promise.all(requests);
    for (const line in results) {
      cache[results[line].config.url.slice(-2)] = results[line];
    }
    lastFetch = currentTime;
  }
  const response: any = {};

  for (const system in cache) {
    const entities = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(cache[system].data);
    entities.entity.forEach(function (entity: any) {
      const id = `${system}.${entity.id}.${entity.vehicle.vehicle.id}`;
      if (response[id] != undefined) {
        console.log('already found');
        console.log(response[id]);
        console.log(entity);
      }
      response[id] = {
        system,
        coordinates: [entity.vehicle.position.longitude, entity.vehicle.position.latitude],
      };
    });
  }
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response));
};
