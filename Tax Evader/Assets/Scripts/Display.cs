using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using UnityEngine.Serialization;

public class Display : MonoBehaviour
{

    //Class: Display
    // Handles interaction between Button elements and their respectful classes
    // Gets Input and serves it
    // Updates Tax percentage bar and risk factor bars according to the NetWorth class
    //Should purchases in Tax Asset class go through the display class? Or should each asset interact directly with a net worth class?

    // Start is called before the first frame update
    public Button propertyButton;
    public Button assetButton;
    public Button stockButton;
    public Button donationButton;
    public Button bankButton;
    public TextMeshProUGUI netWorthText;

    public TextMeshProUGUI assetPanelText;
    string assetPanelMode = "default";
    Button submitIncome;

    private static Display instance;

    void Awake(){
        instance = this;
    }
    
    public static Display GetInstance(){
        return instance;
    }

    void Start()
    {
        propertyButton.onClick.AddListener(PropertyMode);
        assetButton.onClick.AddListener(AssetMode);
        stockButton.onClick.AddListener(StockMode);
        donationButton.onClick.AddListener(DonationMode);
        bankButton.onClick.AddListener(BankMode);
    }

    void StockMode()
    {
        assetPanelMode = "stock";
        
    }
    //AddProperty: triggered when button is clicked after asset panel turns to property mode
    void PropertyMode()
    {
        assetPanelMode = "property";
    }
    void AssetMode()
    {
        assetPanelMode = "asset";
    }

    void DonationMode() {
        assetPanelMode = "donation";
    }

    void BankMode() {
        assetPanelMode = "bank";
    }

    void ShowMoney(){
        string netWorth = "Net Worth:" + NetWorth.GetInstance().NetWorthTotal + "\n";
        string income = "income:" + NetWorth.GetInstance().Income + "\n";
        string projectedTax = "Projected tax:" + NetWorth.GetInstance().projectedTax + "\n";
        netWorthText.text = netWorth+income+projectedTax;
    }
    // Update is called once per frame
    void Update()
    {
     // Button clicks on the UI will be sent to the respective Asset
     // Abstract this interface so sent to multiple areas   
     ShowMoney();
    }
}
