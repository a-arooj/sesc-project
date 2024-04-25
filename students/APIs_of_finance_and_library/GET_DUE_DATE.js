const getDueDate = () => new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

module.exports = { getDueDate }