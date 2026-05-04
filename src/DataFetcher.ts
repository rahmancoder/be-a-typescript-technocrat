type UserResponse = {
info?:
{
    address?:
    {
        zipCode?: string;
    }
}


};


// function getZipCode (input:UserResponse):string {input.info?.| input.address?. | input.zipCode??: "0000"; };

// function getZipCode (input:UserResponse):string {return input.info?.input.address?.input.zipCode??"0000"; };

function getZipCode (input:UserResponse):string {return input.info?.address?.zipCode??"0000"; };


console.log(getZipCode);