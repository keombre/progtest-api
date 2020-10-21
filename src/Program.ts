import { University } from "./Models";
import { Auth } from "./Services";

Auth.Login("Hello", "Hi!", University.CTU_FIT).then(console.log);
