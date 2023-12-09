module.exports = {
    // Base path for the REST API
    basePath: '/cube-api',

    // Inspect, modify, or restrict every query
    queryRewrite: (query, { securityContext }) => {
        if (securityContext.order_id) {
            query.filters.push({
                member: 'orders_view.id',
                operator: 'equals',
                values: [securityContext.order_id]
            });
        }
        return query;
    },
};