CREATE TABLE inv_items (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    organization_id BIGINT UNSIGNED NULL,
    code VARCHAR(50) NOT NULL,
    sku VARCHAR(100) NULL,
    name VARCHAR(255) NOT NULL,
    unit VARCHAR(50) NOT NULL,
    description TEXT NULL,
    
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,

    CONSTRAINT fk_inv_items_organization_id
        FOREIGN KEY (organization_id) REFERENCES organizations(id)
        ON DELETE CASCADE,

    UNIQUE KEY uk_inv_items_code (organization_id, code, deleted_at),
    INDEX idx_inv_items_org (organization_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE inv_item_conversions (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    item_id BIGINT UNSIGNED NOT NULL,
    unit VARCHAR(50) NOT NULL,
    value DECIMAL(18,6) NOT NULL,

    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,

    CONSTRAINT fk_item_conversions_item
        FOREIGN KEY (item_id)
        REFERENCES inv_items(id)
        ON DELETE CASCADE,

    UNIQUE KEY uk_item_unit (item_id, unit, deleted_at),
    INDEX idx_item_conversion_item (item_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE inv_item_stocks (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    item_id BIGINT UNSIGNED NOT NULL,
    amount DECIMAL(18,4) NOT NULL,
    record_type VARCHAR(50) NOT NULL,
    ref_name VARCHAR(100) NULL,
    ref_id BIGINT UNSIGNED NULL,

    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_item_stocks_item
        FOREIGN KEY (item_id)
        REFERENCES inv_items(id)
        ON DELETE CASCADE,

    INDEX idx_item_stock_item (item_id),
    INDEX idx_item_stock_ref (ref_name, ref_id),
    INDEX idx_item_stock_type (record_type)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;