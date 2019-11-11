const createVoteRoom = () => ({
  items: [],
  getItems() {
    return this.items;
  },
  addItem(name) {
    this.items.push({
      id: Math.max(0, ...this.items.map((i) => i.id)) + 1,
      name,
      count: 0,
    });
  },
});

module.exports = {
  createVoteRoom,
};
