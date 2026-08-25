# 5. Cách nhờ AI cho đúng ý

Quan trọng hơn việc chọn model là viết ra trước **mục tiêu, ràng buộc và điều kiện hoàn thành**. Viết được ba thứ đó thì kết quả ổn định hơn hẳn.

## Khuôn mẫu

```text
【Muốn làm gì】một câu
【Phạm vi】@tệp hoặc thư mục（trong chừng mực bạn biết）
【Ràng buộc】cái gì không được làm hỏng / được phép dùng công nghệ nào
【Điều kiện hoàn thành】có gì thì coi như xong
【Không cần làm】（tùy chọn）
```

Ví dụ:

```text
【Muốn làm gì】Thêm mã giảm giá cho giỏ hàng
【Phạm vi】@practice/cart.js
【Ràng buộc】Không đổi ý nghĩa giá trị trả về của getSubtotal hiện có. Giữ nguyên JS thuần
【Điều kiện hoàn thành】Gọi applyCoupon(code) với mã SUMMER10 thì được giảm 10%
【Không cần làm】UI, lưu trữ lâu dài, tệp test
```

## Mẹo về cách diễn đạt

| Tránh nói | Nói thế này thay vào |
|-----------|----------------------|
| Làm cho nó ổn ổn | Cụ thể về giao diện, hành vi và các trường hợp biên |
| Refactor hết đi | Nêu rõ tệp nào, và “làm gì / không làm gì” |
| Sửa bug đi | Mong đợi là gì, thực tế ra sao, tái hiện thế nào |
| Tối ưu vào | Ưu tiên tốc độ, dễ đọc hay tương thích |

## Khi nào nên cắt cuộc hội thoại

- **Đổi việc thì mở chat mới**（tiền đề cũ đỡ vướng chân）
- Khi hội thoại dài ra, nhìn context ring; cần thì mở chat mới và đưa vào một bản tóm tắt để đi tiếp
- Đang làm dở mà muốn đổi hướng thì **cứ gửi luôn, đừng dừng lại**（nó sẽ áp vào ở nhịp nghỉ kế tiếp → phần steering ở [01-modes.md](01-modes.md)）

## Thực hành tổng hợp（ngay trong thư mục này）

Gửi cho Agent:

```text
Dùng practice/ để hoàn thiện một bản demo mua hàng nhỏ.

Yêu cầu:
- cart.js có thêm món, xóa món, tổng phụ, và tổng đã gồm thuế
- Hàm nào trong calculator.js tái sử dụng được thì dùng lại
- Từ index.js cho thấy toàn bộ chuỗi thao tác bằng console.log
- Hạn chế tối đa việc tạo tệp mới

Điều kiện hoàn thành:
- `node practice/index.js` chạy không lỗi và in ra số tiền
```

Chạy được rồi thì hỏi bằng Ask:

```text
Cách chia trách nhiệm giữa các tệp trong practice/ hiện tại đã hợp lý chưa?
Nếu cải thiện thì một bước nhỏ nhất nên làm là gì?
```

---

Phần cơ bản dừng ở đây. Sang phần nâng cao:

Tham khảo: [Prompting](https://cursor.com/docs/agent/prompting)

Tiếp theo: [06-rules.md](06-rules.md)（Rules → Skills → Hooks → MCP → Cloud → PR → chạy song song → vận hành an toàn → Subagents → Plugins → Design Mode → CLI → kết nối ngoài）
