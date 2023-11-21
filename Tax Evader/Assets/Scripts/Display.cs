using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
public class Display : MonoBehaviour
{

    //Class: Display
    // Handles interaction between Button elements and their respectful classes
    // Gets Input and serves it
    // Updates Tax percentage bar and risk factor bars according to the NetWorth class
    //Should purchases in Tax Asset class go through the display class? Or should each asset interact directly with a net worth class?

    // Start is called before the first frame update
    public Button PropertyButton;
    public Button AssetButton;
    public Button StockButton;
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
        PropertyButton.onClick.AddListener(propertyMode);
    }

    void stockMode()
    {
        assetPanelMode = "stock";
        assetPanelText.text = "Stocks!";
        //Enable button to buy stock
    }
    //AddProperty: triggered when button is clicked after asset panel turns to property mode
    void AddProperty(){
        
    }
    void propertyMode()
    {
        assetPanelMode = "property";
        assetPanelText.text = PropertyManager.GetInstance().displayProperties;
    }
    void assetMode()
    {

    }

    void changeAssetPanel(){

    }
    //called in update metho
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
