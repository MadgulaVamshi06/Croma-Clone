import { useState, useRef, useContext } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { CartContext } from "../context/CartProvider";

function PaymentPage() {
  const { setCartItems } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const initialRef = useRef();
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddressSubmit = (event) => {
    event.preventDefault();

    toast({
      title: "Address submitted.",
      status: "success",
      duration: 1000,
      isClosable: true,
    });

    formRef.current.reset();
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    setCartItems([]);
    if (
      paymentMethod === "cash" ||
      (paymentMethod === "card" && validateCardDetails())
    ) {
      onOpen();
    } else {
      toast({
        title: "Invalid Payment Details.",
        description: "Please enter valid payment details.",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  const validateCardDetails = () => {
    return cardDetails.cardNumber && cardDetails.expiry && cardDetails.cvv;
  };

  const resetForm = () => {
    onClose();
    setPaymentMethod("card");
    setCardDetails({ cardNumber: "", expiry: "", cvv: "" }); // Clear card details
  };

  return (
    <Box className="shadow-lg p-4 responsive" p={4}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <form ref={formRef} onSubmit={handleAddressSubmit}>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Full Name</FormLabel>
              <Input id="name" placeholder="Full Name" />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel htmlFor="address">Address</FormLabel>
              <Input id="address" placeholder="Address" />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel htmlFor="city">City</FormLabel>
              <Input id="city" placeholder="City" />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel htmlFor="postalCode">Postal Code</FormLabel>
              <Input id="postalCode" placeholder="Postal Code" />
            </FormControl>

            <Button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit Address
            </Button>
          </form>
        </div>

        <div className="md:w-1/2 md:ml-5">
          {/* Payment Method Selection */}
          <RadioGroup onChange={setPaymentMethod} value={paymentMethod}>
            <Stack direction="row">
              <Radio value="card">Credit/Debit Card</Radio>
              <Radio value="cash">Cash on Delivery</Radio>
              <Radio value="upi">UPI</Radio>
            </Stack>
          </RadioGroup>

          {paymentMethod === "card" && (
            <Box mt={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="cardNumber">Card Number</FormLabel>
                <Input
                  name="cardNumber"
                  placeholder="Card Number"
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="expiry">Expiry Date</FormLabel>
                <Input
                  name="expiry"
                  placeholder="MM/YY"
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="cvv">CVV</FormLabel>
                <Input
                  name="cvv"
                  placeholder="CVV"
                  onChange={handleInputChange}
                />
              </FormControl>
              <Button onClick={handlePaymentSubmit} disabled={isOpen}>
                Place Order (Card)
              </Button>
            </Box>
          )}

          {paymentMethod === "cash" && (
            <Box mt={4}>
              <Button onClick={handlePaymentSubmit} disabled={isOpen}>
                Place Order (Cash)
              </Button>
            </Box>
          )}

          {paymentMethod === "upi" && (
            <Box mt={4}>
              <Button onClick={handlePaymentSubmit} disabled={isOpen}>
                Place Order (UPI)
              </Button>
            </Box>
          )}
        </div>
      </div>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={resetForm}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order Placed</ModalHeader>
          <ModalBody>Your order has been placed successfully.</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={resetForm}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default PaymentPage;
