const addIntegrationMutation = (data: any, service: string): string => {
  return `mutation MyMutation($data: jsonb = ${data}, $service: String = "${service}") {
    insert_integrations_one(object: {data: $data, service: $service}) {
      data
    }
  }
  `;
};

export default addIntegrationMutation;
