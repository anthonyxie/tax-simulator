using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    public List<Property> ownedProperties;

    private static Player instance;

    public static Player GetInstance(){
        return instance;
    }
    void Awake(){
        if(instance != null){
        instance = this;
        }
    }
    // Start is called before the first frame update
    void Start()
    {
        ownedProperties = new List<Property>();
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
