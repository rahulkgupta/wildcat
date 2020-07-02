import { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosResponse } from 'axios';
import { transit_realtime } from 'gtfs-realtime-bindings';

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
];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

const cache = [];
let bartCache: AxiosResponse<any>;
let lastFetch = Date.now();

const AGENCIES = [
  '3D',
  'AC',
  'AM',
  'BA',
  'CC',
  'CE',
  'CM',
  'CT',
  'DE',
  'EM',
  'FS',
  'GF',
  'GG',
  'MA',
  'PE',
  'RG',
  'RV',
  'SA',
  'SB',
  'SC',
  'SF',
  'SI',
  'SM',
  'SO',
  'SR',
  'SS',
  'ST',
  'TD',
  'UC',
  'VC',
  'VN',
  'WC',
  'WH',
];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  const currentTime = Date.now();
  const diff = Math.floor((currentTime - lastFetch) / 1000);
  if (diff > 10) {
    const requests = [];
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
      cache[line] = results[line];
    }
    lastFetch = currentTime;
  }
  const response = [];

  for (const line in cache) {
    const test = transit_realtime.FeedMessage.decode(cache[line].data);
    test.entity.forEach(function (entity) {
      response.push({
        coordinates: [entity.vehicle.position.longitude, entity.vehicle.position.latitude],
      });
    });
  }
  // const blah = JSON.parse(cache.data.substring(1));
  // const vehicles = blah.Siri.ServiceDelivery.VehicleMonitoringDelivery.VehicleActivity;
  // for (const i in vehicles) {
  //   response.push({
  //     coordinates: [
  //       parseFloat(vehicles[i].MonitoredVehicleJourney.VehicleLocation.Longitude),
  //       parseFloat(vehicles[i].MonitoredVehicleJourney.VehicleLocation.Latitude),
  //     ],
  //   });
  // }
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response));
};
