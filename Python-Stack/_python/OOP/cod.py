import unittest 
def dis_prime(n):
    if n < 2:
        return False

    for i in range(2, n):
        if n % i == 0:   
            return False 

    return True        


class test_dis_prime(unittest.TestCase):
    def test1(self):
        self.assertEqual(dis_prime(2),True)
        

    def test2(self):
        self.assertEqual(dis_prime(0),False)


    def test3(self):
        self.assertEqual(dis_prime(-7),False)


if __name__=="__main__":
    unittest.main()