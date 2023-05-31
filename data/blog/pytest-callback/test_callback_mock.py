

def process_even_numbers(numbers, callback):
    for num in numbers:
        if num % 2 == 0:
            callback(num)


from pytest_mock import MockerFixture

# Unit test for process_even_numbers
def test_empty_array(mocker: MockerFixture):
    mock_callback = mocker.Mock(return_value=None)

    # Test case 1: Empty array
    numbers = []
    process_even_numbers(numbers, mock_callback)
    assert not mock_callback.called

def test_array_with_even_numbers(mocker: MockerFixture):
    mock_callback = mocker.Mock(return_value=None)

    # Test case 2: Array with even numbers
    numbers = [2, 5, 8, 11, 14]

    process_even_numbers(numbers, mock_callback)
    assert mock_callback.called
    mock_callback.assert_has_calls(
        [
            mocker.call(2),
            mocker.call(8),
            mocker.call(14)
        ],
        any_order=False,
    )

def test_array_with_no_even_numbers(mocker: MockerFixture):
    mock_callback = mocker.Mock(return_value=None)

    # Test case 3: Array with no even numbers
    numbers = [1, 3, 5, 7, 9]

    process_even_numbers(numbers, mock_callback)
    assert not mock_callback.called
