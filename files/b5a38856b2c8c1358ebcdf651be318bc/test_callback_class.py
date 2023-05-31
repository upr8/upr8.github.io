def process_even_numbers(numbers, callback):
    for num in numbers:
        if num % 2 == 0:
            callback(num)


class mock_callback_class:
    def __init__(self):
        self.callback_called = False
    
    def __call__(self, num):
        self.callback_called = True
    
    def reset(self):
        self.callback_called = False

# Unit test for process_even_numbers
def test_empty_array():
    mock_callback = mock_callback_class()

    # Test case 1: Empty array
    numbers = []
    process_even_numbers(numbers, mock_callback)
    assert not mock_callback.callback_called

def test_array_with_even_numbers():
    mock_callback = mock_callback_class()

    # Test case 2: Array with even numbers
    numbers = [2, 5, 8, 11, 14]

    process_even_numbers(numbers, mock_callback)
    assert mock_callback.callback_called == True

def test_array_with_no_even_numbers():
    mock_callback = mock_callback_class()

    # Test case 3: Array with no even numbers
    numbers = [1, 3, 5, 7, 9]

    process_even_numbers(numbers, mock_callback)
    assert not mock_callback.callback_called
