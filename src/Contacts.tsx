import { MyForm } from "./Form"
import {CopyToClipboard} from 'react-copy-to-clipboard'


export const Contacts: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row px-6 pb-12">     
            {/* ---------- CONTANT FORM ---------- */}
            <div className="md:w-[50%] flex flex-col justify-center items-center md:border-r border-gray-600 px-6">
                <div className="text-md text-center w-[100%]">
                    Got any questions?
                </div>
                <div className="text-xl font-normal w-[100%] text-center">
                    Send a message!
                </div>
                <MyForm></MyForm>
            </div>
            
            {/* ---------- LINKS TO CONNECT ---------- */}
            <div className="w-[100%] md:w-[50%] flex flex-col justify-center self-center px-6 font-normal">
                
                <a href="https://www.linkedin.com/in/balázs-k-6a5263245" target={'_blank'}>
                    <div className="flex flex-row items-center hover:bg-slate-800 rounded-md cursor-pointer contacts-svg-container">
                        <div className="flex justify-end items-center p-1 m-2">
                            <img src="./images/linkedin-logo.png" className="w-[32px] h-[32px] md:w-[48px] md:h-[48px] rounded-md"/>
                        </div>
                        <span>Kerékgyártó Balázs</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="contacts-svg ml-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </div>
                </a>
                
                <a href="https://github.com/Jackyyy9000" target={'_blank'}>
                    <div className="flex flex-row mt-2 items-center hover:bg-slate-800 rounded-md cursor-pointer contacts-svg-container">
                        <div className="flex justify-end items-center p-1 m-2">
                            <img src="./images/github-mark.png" className="w-[32px] h-[32px] md:w-[48px] md:h-[48px] rounded-md"/>
                        </div>
                        <span>Jackyyy9000</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="contacts-svg ml-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </div>    
                </a>

                <CopyToClipboard text={"kerekgyarto.balazs0218@gmail.com"}>
                    <div className="flex flex-row mt-2 items-center hover:bg-slate-800 rounded-md cursor-pointer contacts-svg-container" onClick={() => {alert('Copied to clipboard.')}}>
                        <div className="flex justify-end items-center p-1 m-2">
                            <img src="./images/gmail-icon.png" className="w-[32px] h-[32px] md:w-[48px] md:h-[48px] rounded-md"/>
                        </div>
                        <span>kerekgyarto.balazs0218</span>
                        {/* Should put a developer email address here */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="contacts-svg ml-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                        </svg>
                    </div>  
                </CopyToClipboard>   


                <CopyToClipboard text={"Kerekgyarto Balazs#1562"}>
                    <div className="flex flex-row mt-2 items-center hover:bg-slate-800 rounded-md cursor-pointer contacts-svg-container" onClick={() => {alert('Copied to clipboard.')}}>
                        <div className="flex justify-end items-center p-1 m-2">
                            <img src="./images/discord-mark-blue.svg" className="w-[32px] h-[32px] md:w-[48px] md:h-[48px] rounded-md"/>
                        </div>         
                        <span>Kerekgyarto Balazs#1562</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="contacts-svg ml-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                        </svg>   
                    </div> 
                </CopyToClipboard>  
            </div>
        </div>
    )
}