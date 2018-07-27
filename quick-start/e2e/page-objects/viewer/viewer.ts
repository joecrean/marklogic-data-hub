import {
  protractor, browser, element, by, By, $, $$, ExpectedConditions as EC, ElementFinder,
  ElementArrayFinder
} from 'protractor'
import { AppPage } from '../appPage';
import { pages } from '../page';
import {Element} from "@angular/compiler";

export class ViewerPage extends AppPage {

  //to get the login box locater
  locator() {
    return by.css('app-search-viewer');
  }

  searchResultUri() {
    return element(by.css('.title > h4'));
  }

  verifyVariableName(variableName: string) {
    return element(by.cssContainingText('.cm-variable', variableName));
  }

  verifyStringName(stringName: string) {
    return element(by.cssContainingText('.cm-string', stringName));
  }

  verifyHarmonizedProperty(propertyName: string, harmonizedValue: string) {
    return element(by.xpath(`//span[@class="cm-variable" and contains(text(), "${propertyName}")]/../span[@class="cm-string" and contains(text(), "${harmonizedValue}")]`));
  }
}

var viewerPage = new ViewerPage();
export default viewerPage;
pages.addPage(viewerPage);
