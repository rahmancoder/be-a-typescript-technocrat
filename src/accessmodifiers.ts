// access >> modify

class BankAccount 
{
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) 
  {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  private addBalance(balance: number) 
  {
    this._userBalance = this._userBalance + balance;
  }
}

class StudentBankAccount extends BankAccount 
{
  test() 
  {
    // its private you can't access private variable outside class
    // this._userBalance; 
  }
}

const mezbaBhaiAccount = new BankAccount(111, "Mezba", 20);

// can't update addBalance cause property is private
// mezbaBhaiAccount.addBalance(100);
// mezbaBhaiAccount.addBalance(50);

console.log(mezbaBhaiAccount);


// Output

// BankAccount { userId: 111, userName: 'Mezba', _userBalance: 20 }