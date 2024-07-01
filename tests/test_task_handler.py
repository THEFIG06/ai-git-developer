import unittest
from task_handler import TaskHandler

class TestTaskHandler(unittest.TestCase):

    def setUp(self):
        self.task_handler = TaskHandler()

    def test_task_creation(self):
        task = self.task_handler.create_task('Test Task')
        self.assertEqual(task.name, 'Test Task')

    def test_task_completion(self):
        task = self.task_handler.create_task('Test Task')
        self.task_handler.complete_task(task)
        self.assertTrue(task.is_completed)

    def test_task_deletion(self):
        task = self.task_handler.create_task('Test Task')
        self.task_handler.delete_task(task)
        self.assertNotIn(task, self.task_handler.tasks)

if __name__ == '__main__':
    unittest.main()