from os import environ
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from time import sleep


class Codesh(webdriver.Chrome):
    def __init__(
        self,
        teardown: bool = False,
        implicit_wait: int = 0,
        driver_path: str = ':/home/luigi/selenium_drivers',
        headless: bool = False
            ) -> None:

        self.teardown = teardown
        options = Options()
        options.add_argument('--no-sandbox')
        options.add_argument("--headless")
        options.add_argument("--disable-dev-shm-usage")
        environ['PATH'] += driver_path
        super(Codesh, self).__init__(options=options)
        self.implicitly_wait(implicit_wait)

    def land_in_page(self, page: str = None):
        self.get(page)

    def scroll_site(self) -> None:
        SCROLL_PAUSE_TIME = 1
        last_element = self.find_elements(By.CSS_SELECTOR, "a[class='mb-5 card']")[-1]
        i = 0
        while i < 5:
            self.execute_script("arguments[0].scrollIntoView();", last_element)
            sleep(SCROLL_PAUSE_TIME)
            new_element = self.find_elements(By.CSS_SELECTOR, "a[class='mb-5 card']")[-1]
            if new_element != last_element:
                last_element = new_element
            else:
                print(i)
                i += 1
        return None


    def get_first_page_infos(self) -> list:
        container = self.find_element(
            By.CSS_SELECTOR, 'div[class="space-2 container"]')
        boxes = container.find_elements(
            By.CSS_SELECTOR, 'a[class="mb-5 card"]')
        companies = dict()
        for box in boxes:
            tag = box.find_element(By.TAG_NAME, 'a')
            name = tag.text
            stacks = box.find_element(
                By.CSS_SELECTOR,
                'div[class="mb-3 mb-md-0"] > span[class="align-middle"]')
            stacks = stacks.find_elements(By.TAG_NAME, 'span')
            if name not in companies.keys():
                name_href = tag.get_attribute('href')
                companies[name] = dict()
                companies[name]['perfil'] = name_href
                companies[name]['vagas'] = box.get_attribute('href')
                companies[name]['stacks'] = [stack.text for stack in stacks]
            else:
                companies[name]['stacks'] = \
                    list(
                        set(companies[name]['stacks'] +
                            [stack.text for stack in stacks])
                    )
        return companies
