const addIntegrationMutation = (data: any, service: string): string => {
  return `mutation MyMutation($data: jsonb = ${data}, $service: String = "${service}") {
    insert_integrations_one(object: {service: $service, data: $data}) {
      data
    }
  }
  `;
};

export default addIntegrationMutation;
