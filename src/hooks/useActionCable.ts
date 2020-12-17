import ActionCable from "actioncable";

interface ChatChannel extends ActionCable.Channel {
  speak(message: String): void;
}

export function useActionCable(userUuid: string, roomUuid: string){
     const cable = ActionCable.createConsumer(
       `ws://localhost:3000/cable?p=${userUuid}`
     );
     console.log(`ws://localhost:3000/cable?p=${userUuid}`);
     const chatChannel = cable.subscriptions.create(
       { channel: "RoomChannel", room_uuid: roomUuid },
       {
         connected() {
           console.log("connected");
         },
         received(data: any) {
           // とりあえずconsole.logで確認
           console.log(data);
         },
         speak(message: string) {
           console.log(message);
           return this.perform("send_message", { message: message });
         },
       }
     ) as ChatChannel;

     return [ chatChannel.speak ]
}
