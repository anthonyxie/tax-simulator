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
    private TextMeshProUGUI netWorthText;

    Button submitIncome;


    void Start()
    {
        
    }

    //called in update method
    void ShowMoney(){
        string netWorth = "Net Worth:" + NetWorth.GetInstance().NetWorthTotal + "\n";
        string income = "income:" + NetWorth.GetInstance().Income + "\n";
        string 

    }
    // Update is called once per frame
    void Update()
    {
     // Button clicks on the UI will be sent to the respective Asset
     // Abstract this interface so sent to multiple areas   
    }
}
