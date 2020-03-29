describe('Comparadores comunes', () => {
  const user = {
    name: 'oscar',
    lastname: 'garcia'
  };
  const user2 = {
    name: 'oscar',
    lastname: 'garcia'
  };
  const user3 = {
    name: 'Sebastián',
    lastname: 'garcia'
  };

  test('Igualdad de elementos', () => {
    expect(user).toEqual(user2);
  });
  test('No son exactamente iguales', () => {
    expect(user).not.toEqual(user3);
  });
});
