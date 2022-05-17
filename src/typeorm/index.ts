import { konfiguracje } from "./konfiguracje";
import { uzytkownicy } from "./user";
import { zamowienia } from "./zamowienia";
import { akcesoria } from "./akcesoria";
import { pakiety } from "./pakiety";
import { opcjedod } from "./opcje_dodatkowe";
import { wersje } from "./wersje";
import { wnetrza } from "./wnetrza";
import { nadwozie } from "./nadwozie";
import { felgi } from "./felgi";
import { silnik } from "./silnik";
const entities = [uzytkownicy, zamowienia , konfiguracje, akcesoria, pakiety, opcjedod, wersje, wnetrza, nadwozie, felgi, silnik];
export {uzytkownicy};
export {zamowienia};
export {konfiguracje};
export {akcesoria};
export {pakiety};
export {opcjedod};
export {wersje};
export {wnetrza};
export {nadwozie};
export {felgi};
export {silnik};
export default entities;