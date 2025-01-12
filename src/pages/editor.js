import {useEffect, useRef, useState}  from 'react';
import Client from '../Components/Client';
import EditorC from '../Components/editorC';
import { initSocket } from '../socket';
import ACTIONS from '../actions';
import { useLocation, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';



function Editor() {
  const socketRef =useRef(null);
  const location = useLocation();
  const {roomId} = useParams();
  const [clients, setClients] = useState([]);
  useEffect(() =>{
const init = async () =>{
socketRef.current =await initSocket();

socketRef.current.emit(ACTIONS.JOIN,{
  roomId,
  username:location.state?.username,
});


socketRef.current.on(ACTIONS.JOINED, ({clients,username,socketId}) => {
if(username !== location.state?.username){
toast.success(`${username} joined the room.`);

}
setClients(clients);
})


}
init();
  });

  
    return (
      <div className="mainWrap">
        <div className="aside">
          <div className="asideInner">
            <div className="Logo">
              <h4>COLLABO</h4>
              <p>a collabarative editor </p>
            </div>
            <h3>CONNECTED</h3>
            <div className="ClientsList">
              {
                clients.map((client)=>(
                  <Client key={client.socketId} username={client.username}/>

                ))
              }
            </div>
          </div>
          <button className='btn copy-btn'>Copy Room Id</button>
          <button className='btn leave-btn'>LEAVE</button>
        </div>
        <div className="editorWrap">
           <EditorC/>
        </div>
      </div>
    );
  }
  
  export default Editor;