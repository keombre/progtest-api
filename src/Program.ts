import { University } from "./Models";
import { Auth } from "./Services";

Auth.Login('mocker00', 'password', University.CTU_FIT).then(console.log);
