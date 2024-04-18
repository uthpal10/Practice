import Generic from "../../pageobjects/Generic.js";
import Homepage from "../../pageobjects/CheapFlights/Homepage.js";
import { expect } from "chai";

describe('suite', () =>
{
    it('Title', async() =>
    {
        await Generic.launchCheapFlights();

        // Verifying Title
        let title = await browser.getTitle();
        expect(title).to.equal("Cheap Flights, Compare Flights & Airline Deals - in.Cheapflights.com");

        // Verifying Url
        let url = await browser.getUrl();
        expect(url).to.equal("https://www.in.cheapflights.com/", "Url is not as expected");
        await Homepage.bookFlight("One-wa", "DEL", "BLR", "April 2024", 21);
        await browser.pause(5000);
    })
})