USE byu_hardware_store;

-- Insert users
INSERT INTO user (name, email, password) VALUES
('Alice Johnson', 'alice@example.com', 'password123'),
('Bob Smith', 'bob@example.com', 'password456'),
('Charlie Lee', 'charlie@example.com', 'password789');

-- Insert products
INSERT INTO product (name, description, price, stock) VALUES
('Gaming Mouse', 'High precision wired gaming mouse', 49.99, 25),
('Mechanical Keyboard', 'RGB backlit mechanical keyboard', 89.99, 15),
('Graphics Card GTX 1660', '6GB GDDR5 graphic card for gaming', 249.99, 10),
('Power Supply 600W', 'Modular 80+ Bronze certified PSU', 69.99, 20),
('SSD 1TB', '1TB NVMe solid state drive', 119.99, 30);

-- Insert carts (1 active cart per user)
INSERT INTO cart (user_id, purchased) VALUES
(1, FALSE),
(2, FALSE),
(3, TRUE);  -- Charlie's cart already purchased

-- Insert cart items (Alice and Bob have active carts)
INSERT INTO cart_item (cart_id, product_id, quantity) VALUES
(1, 1, 2), -- Alice: 2x Gaming Mouse
(1, 2, 1), -- Alice: 1x Keyboard
(2, 3, 1), -- Bob: 1x Graphics Card
(2, 5, 2); -- Bob: 2x SSDs

-- Insert cart items for Charlie's purchased cart (history)
INSERT INTO cart_item (cart_id, product_id, quantity) VALUES
(3, 4, 1), -- Power Supply
(3, 2, 1); -- Keyboard

SELECT * FROM cart_item
JOIN product ON cart_item.product_id = product.id
WHERE cart_id = 1;
