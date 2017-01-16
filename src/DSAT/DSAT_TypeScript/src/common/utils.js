Array.prototype["enqueue"] = function (data) {
    this.push(data);
};
Array.prototype["dequeue"] = function () {
    return this.splice(0, 1)[0];
};
//# sourceMappingURL=utils.js.map