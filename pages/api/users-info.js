export default (req, res) => {
  const data = [
    {
      "userId": 1,
      "id": 1,
      "name": "Wenda01",
      "desc": "Test Wenda01"
    },
    {
      "userId": 1,
      "id": 2,
      "name": "Wenda02",
      "desc": "Test Wenda02"
    }
  ];
  res.status(200).json(data)
}
