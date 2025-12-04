import { expect, Locator, Page } from "@playwright/test";
import{profileData} from '../data/profileData.json';

export class Profile{
    readonly page: Page;
    readonly ProfileBtn: Locator;
    readonly Age: Locator;
    readonly Address: Locator;
    readonly PhoneNum: Locator;
    readonly SaveBtn: Locator;

    constructor(page:Page){
        this.page= page;
        this.ProfileBtn=page.getByRole('link', { name: 'Profile' });
        this.Age=page.getByRole('textbox', { name: 'Age' });
        this.Address=page.getByRole('textbox', { name: 'Address' });
        this.PhoneNum=page.getByRole('textbox', { name: 'Phone' });
        this.SaveBtn=page.getByRole('button', { name: 'Save' });
    }
    /**
     * Open the Profile > Additional Info section and fill the profile form with test data.
     * - Navigates to the profile section
     * - Verifies the Additional Info heading is visible
     * - Fills Age, Phone and Address fields from `profileData`
     * @returns Promise<void>
     */
    async profileformValidation(){
        await this.ProfileBtn.click();
        await expect(this.page.getByRole('heading', { name: 'Additional Info' }).first()).toBeVisible();
        await this.Age.fill(profileData.Age);
        await this.PhoneNum.fill(profileData.PhoneNumber);
        await this.Address.fill(profileData.Address);
    }


}