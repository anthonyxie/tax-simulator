using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PropertyManager : MonoBehaviour
{

    private static PropertyManager instance;


    public Property[] availableProperties;

    public static PropertyManager GetInstance(){
        return instance;
    }

    public string displayProperties;
    void Awake(){
        if(instance != null){

        }
        instance = this;
    }
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
    //iterate through available properties   
        updateProperties(); 
    }

    void purchaseProperty(Property property){
        if (NetWorth.GetInstance().Income >= property.price) {
            NetWorth.GetInstance().Income -= property.price;
            NetWorth.GetInstance().projectedTax -= property.price * 0.2f;
            Player.GetInstance().ownedProperties.Add(property);
        }
    }
    //display properties:
    // goal: iterate through, add to string, and create button that adds it to player class
    // maybe call a Display, later a displaymanager function that links to the property
    //will be a button with a property as a child of the element.
    void updateProperties(){
        int index = 1;
        displayProperties = "";
        foreach(Property taxProp in availableProperties){
            displayProperties += "Property " + index +"\n";
            displayProperties += "Name: " + taxProp.name +"\n";
            displayProperties += "Cost: " + taxProp.price +"\n";
            displayProperties += "Taxes: " + (taxProp.price * taxProp.taxPercentage) +"\n\n";
            //Add counter of amount owned
            // Net worth Check
            index += 1;
        }
    }
}
