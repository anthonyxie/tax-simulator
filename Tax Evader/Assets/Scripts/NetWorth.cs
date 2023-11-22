using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// TODO: clean this up with a get setter
public class NetWorth : MonoBehaviour
{


    private static NetWorth instance;

    public static NetWorth GetInstance(){
        return instance;
    }
    //need to develop system to save and load portfolios, but this should work for now.
    public float NetWorthTotal;
    public float Income;
    public float projectedTax;
    public float taxPercentage = 0.2f; // may change from portfolio to portfolio
    private void Awake()
    {
        if(instance != null)
        {

        }
        instance = this;
    }
    // Start is called before the first frame update
    void Start()
    {
        NetWorthTotal = 100000;
        Income = 100000;
        projectedTax = taxPercentage * Income;
    }

    // Update is called once per frame

    //This function updates the net worth, income, and projected tax values.

    //Called when an asset is purchased.
    // The Income is already subtracted after the asset is purchased, so we just need to change the tax value.
    // The net worth should also be adjusted, maybe asset values may change from year-to-year?
    public void UpdateWorth()
    {
        foreach(Property property in Player.GetInstance().ownedProperties){
            projectedTax += property.taxPercentage * property.price;
        }
    }
    void Update()
    {
        
    }
}
