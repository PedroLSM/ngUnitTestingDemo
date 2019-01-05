import { MessageService } from "./message.service";

describe('MessageService', () => {

    let service: MessageService;

    it('should have no messages to start', () => {
        service = new MessageService();

        let val = service.messages.length;

        expect(val).toBe(0);
    });

    it('should add a message when add is called', () => {
        service = new MessageService();
        
        service.add("message1");
        let val = service.messages.length;

        expect(val).toBe(1);
    });

    it('should remove all messages when clear is called', () => {
        service = new MessageService();
        service.add("message1");

        service.clear();
        let val = service.messages.length;

        expect(val).toBe(0);
    });

});
