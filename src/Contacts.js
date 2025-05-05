import useFetch from "./useFetch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Contacts = () => {
    const {data: contacts, isLoading, error} = useFetch('http://localhost:8080/contacts');
    return (
        <div className="contacts container">
            <h2 className="pb-4 mb-4 border-bottom">Contacts</h2>
            {contacts && 
            <div>
                {contacts.map((contact) => (
                    <div key={contact.id}>
                        {contact.content.startsWith('http') &&
                            <a href={contact.content} className="contact-preview" target="_blank" rel="noopener noreferrer">
                                <div>
                                    <img src={`http://localhost:8080/contacts/${contact.id}`} alt={contact.description} className="contact-image"/>
                                </div>
                                
                                <p>{ contact.content }</p>
                            </a>
                        }
                        {contact.content.startsWith('+370') &&
                            <a href={"tel:" + contact.content} className="contact-preview" target="_blank" rel="noopener noreferrer">
                                <div>
                                    <img src={`http://localhost:8080/contacts/${contact.id}`} alt={contact.description} className="contact-image"/>
                                </div>
                                
                                <p>{ contact.content }</p>
                            </a>
                        }
                        {contact.content.includes('@') && contact.content.includes('mail') &&
                            <a href={"mailto:" + contact.content} className="contact-preview" target="_blank" rel="noopener noreferrer">
                                <div>
                                    <img src={`http://localhost:8080/contacts/${contact.id}`} alt={contact.description} className="contact-image"/>
                                </div>
                                
                                <p>{ contact.content }</p>
                            </a>
                        }
                    </div>
                ))}
            </div> }
        </div>
    );
}
 
export default Contacts;