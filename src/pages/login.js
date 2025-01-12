import {v4 as uuidV4} from 'uuid';
import {useState}  from 'react';
import toast  from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

function Login() {

  const navigate = useNavigate('');
const [RoomId, setRoomId]= useState('');
const [UserName, setUserName]= useState('');
  const CreateNewRomm =(e) =>{
      e.preventDefault();
      const id =uuidV4();
      setRoomId(id);
      //checking uuid generation
    console.log(id);
      toast.success("ROOM CREATED");
  };

  const JoinRoom = () => {

    if(!RoomId || !UserName){
      toast.error("room id and user name required");
      return;
    }

    //redirecting....

    navigate(`/editor/${RoomId}`, {
      state: {
          UserName,RoomId,
      },
  });
  

    };

  const handleInputEnter =(e) =>{

if(e.code === 'Enter'){
  JoinRoom();
}
  }

      
    


  
  return (
    <div className="LoginWrapper">
      <div className="FormWrapper">
       <h3 className="FormLabel">COLLABO EDITOR</h3>
       <div className="InputsGroups">
          <input type="text" className="inputBox" placeholder="Room Id" 
          onChange={(e) => setRoomId(e.target.value)} value={RoomId} onKeyUp={handleInputEnter}/>
          <input type="text" className="inputBox" placeholder="User Name" 
          onChange={(e) => setUserName(e.target.value)} value={UserName} onKeyUp={handleInputEnter}/>
          <button class=" btn joinBtn" onClick={JoinRoom}>JOIN</button>
          <span class="createInfo"> To Create New Room Link Click Here ➡️ &nbsp;
            <a  onClick={CreateNewRomm} href="" class="createNewBtn">New Room</a>
          </span>

       </div>
      </div>
      <footer>
        <h4>
          HAPPY CODING 😈
        </h4></footer>
    </div>
  );
};


export default Login;