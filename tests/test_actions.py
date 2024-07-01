import unittest
from actions import Actions

class TestActions(unittest.TestCase):

    def setUp(self):
        self.actions = Actions()

    def test_action1(self):
        result = self.actions.action1()
        self.assertEqual(result, expected_result)

    def test_action2(self):
        result = self.actions.action2()
        self.assertEqual(result, expected_result)

    def test_action3(self):
        result = self.actions.action3()
        self.assertEqual(result, expected_result)

if __name__ == '__main__':
    unittest.main()