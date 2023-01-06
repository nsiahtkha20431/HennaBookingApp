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
    // expect(data.Name).toBe('Nishat');
    // console.log('Hello World!'); 

    // What you want to do is make a post request with a package that you have installed. This
    // might be the 'got' package.

    // After you make the request, you should be able to get the response body and check that it
    // is equal to "Hello World!"

    // You can check things using assertions, eg `expect(theBestFlavor).toBe('grapefruit');`
    // Make sure that you have the server started as another process while you're running the test,
    // or the requests will go nowhere!

    // Remember, npm run test-server to run this server, and npm run dev-server to run the app server
  });
});

