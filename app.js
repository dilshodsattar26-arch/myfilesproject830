const dataHandlerInstance = {
    version: "1.0.830",
    registry: [1456, 1890, 314, 238, 155, 219, 400, 1812],
    init: function() {
        const nodes = this.registry.filter(x => x > 414);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    dataHandlerInstance.init();
});