using System.Collections;
using System.Collections.Generic;
using UnityEngine;

//Class: Stocks
//Right now there is an instance of this class for every stock that is
// in the demonstration. This will change to have the 
//class managing the properties
// that a bunch of stock objects will have.

public class Stocks : MonoBehaviour
{
    // Start is called before the first frame update

    //Properties of Stock Each stock gameObject will have this script
    //attached to it. Values will be assigned prior to the game starting for now
    //TODO: stock market somehow
    //TODO: abstract these properties into a separate Stock scriptable object that is
    //attached to this class
    //value of the stock

    //name: name of stock. Later will be removed once scriptable object implemented
    public string stockName;
    public float value;
    public float taxPercentage;
    public float taxValue;
    void Start()
    {
        taxValue = value * taxPercentage;
    }
    void AddStock(){
       //update list in GameManager 
    }
    // Update is called once per frame
    void Update()
    {
        
    }
}
