cube(`companies`, {
  sql_table: `public.companies`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    address: {
      sql: `address`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
