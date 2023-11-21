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
    public float NetWorthTotal;
    public float Income;
    public float projectedTax;
    // Start is called before the first frame update
    void Start()
    {
        NetWorthTotal = 1000000000;
        Income = 100000;
        projectedTax = 0.2f * Income;
    }

    // Update is called once per frame

    //This function updates the net worth, income, and projected tax values.

    //Called when an asset is created
    // TODO: instead of directly changing networth, have Net Worth search through all
    //available assets and add them all together to calculate, similarly with tax. Will work for demo
    public void UpdateWorth(float deltaWorth,float deltaIncome, float deltaTax)
    {
        NetWorthTotal += deltaWorth;
        projectedTax -= deltaTax;
        Income -= deltaIncome;
    }
    void Update()
    {
        
    }
}
