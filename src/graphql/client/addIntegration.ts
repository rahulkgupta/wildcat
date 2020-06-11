// will need to figure out how to handle SWR here...
const addIntegrationMutation = (): string => {
  return `mutation MyMutation($data: jsonb, $service: String = "") {
    insert_integrations_one(object: {data: $data, service: $service}) {
      data
    }
  }
  `;
};

export default addIntegrationMutation;
