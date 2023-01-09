import defaultExport from './loadPage.js';
import { homePageElements } from './homePageElems.js';

const elements = [homePageElements, '', ''];
defaultExport(elements[0].header, elements.homeMain, elements.footer)