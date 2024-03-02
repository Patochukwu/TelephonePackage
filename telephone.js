class Telephone {
  constructor() {
    this.phoneNumbers = [];
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(phoneNumber) {
    this.observers.forEach((observer) => {
      observer.update(phoneNumber);
    });
  }

  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.push(phoneNumber);
  }

  removePhoneNumber(phoneNumber) {
    const index = this.phoneNumbers.indexOf(phoneNumber);
    if (index !== -1) {
      this.phoneNumbers.splice(index, 1);
    }
  }

  dialPhoneNumber(phoneNumber) {
    if (this.phoneNumbers.includes(phoneNumber)) {
      this.notifyObservers(phoneNumber);
    } else {
      console.log("Phone number not found.");
    }
  }
}

class PhoneNumberObserver {
  update(phoneNumber) {
    console.log("Phone number:", phoneNumber);
  }
}

class CustomObserver {
  update(phoneNumber) {
    console.log("Now Dialling", phoneNumber);
  }
}

// Usage example
const telephone = new Telephone();

// Add observers
const phoneNumberObserver = new PhoneNumberObserver();
const customObserver = new CustomObserver();
telephone.addObserver(phoneNumberObserver);
telephone.addObserver(customObserver);

// Add phone numbers
telephone.addPhoneNumber("1234567890");
telephone.addPhoneNumber("2347023232");

// Dial a phone number
telephone.dialPhoneNumber("1234567890"); // This will notify both observers
telephone.dialPhoneNumber("2347023232"); // This will notify both observers
telephone.dialPhoneNumber("9999999999"); // This will not find the phone number

// Remove phone number
telephone.removePhoneNumber("1234567890");

// Dial a phone number again after removal
telephone.dialPhoneNumber("1234567890"); // This will not find the phone number
telephone.notifyObservers("2347023232"); //This will notify observers

// dial phone number again after removal
telephone.dialPhoneNumber("2347023232"); //This will dial phoneNumber again
````;
