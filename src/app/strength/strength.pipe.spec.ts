import { StrengthPipe } from "./strength.pipe";

describe('StrengthPipe', () => {

    it('should display weak if display is 5', () => {
        let pipe = new StrengthPipe();

        let val = pipe.transform(5);

        expect(val).toBe("5 (weak)");
    });
    
    it('should display strong if display is 15', () => {
        let pipe = new StrengthPipe();

        let val = pipe.transform(15);

        expect(val).toBe("15 (strong)");
    });
    
    it('should display unbelievable if display is 25', () => {
        let pipe = new StrengthPipe();

        let val = pipe.transform(25);

        expect(val).toBe("25 (unbelievable)");
    });

});
