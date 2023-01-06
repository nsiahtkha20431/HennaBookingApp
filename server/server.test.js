import got from 'got';

describe('server functional tests', () => {
  test('the best flavor is grapefruit', () => {
    const theBestFlavor = 'grapefruit';
    expect(theBestFlavor).toBe('grapefruit');
  });

  test('You can do anything!', () => {
    const theBestFlavor = 'grapefruit';
    expect(theBestFlavor).toBe('grapefruit');
  });

  test('Making a post request to / on the server should respond with "Hello World!"', async () => {
    // Making a post request to / means making a post request to the root of the server
    // The root of the server basically means the "/" after localhost:3001
    // This is similar to the line in App.js which does fetch('http://localhost:3001/',.. 
    await got.post('http://localhost:3001', {
	    json: {
		    "name": "Nishat",
        "age": 28
	    }
    });
  });
});

