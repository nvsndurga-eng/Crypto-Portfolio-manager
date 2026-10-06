def calculate_mix(total_amount, assets):
    allocation = {}
    portion = total_amount / len(assets)

    for asset in assets:
        allocation[asset] = portion

    return allocation