﻿import {
  NodeToSchemaType,
  PdfMarkToPdfDownload,
  htmlToPdfMark,
  mdToHtml,
} from '@ant-design/md-to-json-schema';
import { Card, Input, Space } from 'antd';
import { MessageRender } from './Render';

//@ts-ignore
import React, { useState } from 'react';
import { EditCard } from './EditCard';
import { InvertTransition } from './Transition';
import './air.css';

const defaultValue = `<!-- {"MarkdownType": "report", "id": "8", "section_ids": " [15, 16, 17] "} -->

# 腾讯研究报告

<!-- {"MarkdownType": "section", "id": "15" } -->

## 创始人

腾讯，全称深圳市腾讯计算机系统有限公司，是由五位创始人共同创立的，他们是马化腾、张志东、许晨晔、陈一丹和曾李青。 以下是关于这些创始人的详细信息： 马化腾 马化腾，1971 年 10 月 29 日出生于广东省东方县（现海南省东方市）八所港，广东汕头人，汉族，无党派人士。他毕业于深圳大学电子工程系计算机专业。马化腾是腾讯科技（深圳）有限公司的创始人、董事会主席、首席执行官，并曾是中华人民共和国第十二、十三届全国人民代表大会代表 。马化腾在 1998 年 11 月 11 日与合伙人共同注册成立了腾讯，并在 2004 年 6 月 16 日带领腾讯在香港联合交易所有限公司主板上市。 张志东 张志东，马化腾的同学，被称为 QQ 之父。他的计算机技术非常出色，曾是深圳大学最拔尖的学生之一。张志东在腾讯担任 CTO，并在 2014 年 9 月离职，转任腾讯公司终身荣誉顾问及腾讯学院荣誉院长等职位 。

<!-- {"MarkdownType": "section", "id": "16" } -->


## 表格

| 业务          | 2021Q1  | 2021Q2  | 2021Q3  | 2021Q4  | 2022Q1  | 2022Q2  | 2022Q3  | 2022Q4  | 2023Q1  | 2023Q2  | 2023Q3  | 2023Q4  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| 收入          | 135,303 | 138,259 | 142,368 | 144,188 | 135,471 | 134,034 | 140,093 | 144,954 | 149,986 | 149,208 | 154,625 | 155,200 |
| 增值服务      | 72,443  | 72,013  | 75,203  | 71,913  | 72,738  | 71,683  | 72,727  | 70,417  | 79,337  | 74,211  | 75,748  | 69,100  |
| -网络游戏     | 43,600  | 43,000  | 44,900  | 42,800  | 43,600  | 42,500  | na      | na      | na      | 44,500  | 46,000  | 40,900  |
| -社交网络收入 | 28,800  | 29,000  | 30,300  | 29,100  | 29,100  | 29,200  | na      | na      | na      | 29,700  | 29,700  | 28,200  |
| 网络广告      | 21,820  | 22,833  | 22,495  | 21,518  | 17,988  | 18,638  | 21,443  | 24,660  | 20,964  | 25,003  | 25,721  | 29,794  |
| 其他          | 41,040  | 43,413  | 44,670  | 50,757  | 44,745  | 43,713  | 45,923  | 49,877  | 49,685  | 49,994  | 53,156  | 54,379  |
| -金融科技     | 39,028  | 41,892  | 43,317  | 47,958  | 42,768  | 42,208  | 44,844  | 47,244  | 48,701  | 48,635  | 52,048  | 52,435  |
| -云           | 2,012   | 1,521   | 1,353   | 2,799   | 1,977   | 1,505   | 1,079   | 2,633   | 984     | 1,359   | 1,108   | 1,944   |

## 图表

<!-- {"chartType": "bar", "x":"业务", "y":"2021Q1"} -->

| 业务          | 2021Q1  | 2021Q2  | 2021Q3  | 2021Q4  | 2022Q1  | 
| ------------- | ------- | ------- | ------- | ------- | ------- |
| 收入          | 135,303 | 138,259 | 142,368 | 144,188 | 135,471 |
| 增值服务      | 72,443  | 72,013  | 75,203  | 71,913  | 72,738  | 
| -网络游戏     | 43,600  | 43,000  | 44,900  | 42,800  | 43,600  | 
| -社交网络收入 | 28,800  | 29,000  | 30,300  | 29,100  | 29,100  |
| 网络广告      | 21,820  | 22,833  | 22,495  | 21,518  | 17,988  | 
| 其他          | 41,040  | 43,413  | 44,670  | 50,757  | 44,745  |
| -金融科技     | 39,028  | 41,892  | 43,317  | 47,958  | 42,768  | 
| -云           | 2,012   | 1,521   | 1,353   | 2,799   | 1,977   | 


<!-- {"MarkdownType": "section", "id": "22" } -->
| 业务          | 2021Q1  | 2021Q2  | 2021Q3  | 2021Q4  | 2022Q1  | 
| ------------- | ------- | ------- | ------- | ------- | ------- |
| 收入          | 135,303 | 138,259 | 142,368 | 144,188 | 135,471 |
| 增值服务      | 72,443  | 72,013  | 75,203  | 71,913  | 72,738  | 
| -网络游戏     | 43,600  | 43,000  | 44,900  | 42,800  | 43,600  | 
| -社交网络收入 | 28,800  | 29,000  | 30,300  | 29,100  | 29,100  |
| 网络广告      | 21,820  | 22,833  | 22,495  | 21,518  | 17,988  | 
| 其他          | 41,040  | 43,413  | 44,670  | 50,757  | 44,745  |
| -金融科技     | 39,028  | 41,892  | 43,317  | 47,958  | 42,768  | 
| -云           | 2,012   | 1,521   | 1,353   | 2,799   | 1,977   | 

`;
export default () => {
  const [value, setValue] = useState(defaultValue);

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: 16,
          padding: 24,
        }}
      >
        <Card
          style={{
            flex: 1,
            maxWidth: '48%',
            height: '100%',
          }}
          styles={{
            body: {
              padding: 0,
              position: 'relative',
              height: '100%',
              minHeight: '100vh',
            },
          }}
        >
          <Input.TextArea
            style={{
              minHeight: '100vh',
            }}
            value={value}
            onChange={(e) => setValue(e.target.value || '')}
          />
        </Card>
        <Card
          style={{
            flex: 1,
            maxWidth: '50%',
          }}
          styles={{
            body: {
              padding: 0,
            },
          }}
          extra={
            <Space>
              <a
                onClick={() => {
                  console.log(
                    PdfMarkToPdfDownload(htmlToPdfMark(mdToHtml(value), {}), {
                      fileName: '腾讯研究报告.pdf',
                      fontUrl: {
                        normal:
                          'https://mdn.alipayobjects.com/huamei_ptjqan/afts/file/A*RrWLR5c9EEcAAAAAAAAAAAAADkN6AQ/AlibabaPuHuiTi-3-55-Regular.ttf',
                        bold: 'https://mdn.alipayobjects.com/huamei_ptjqan/afts/file/A*RrWLR5c9EEcAAAAAAAAAAAAADkN6AQ/AlibabaPuHuiTi-3-55-Regular.ttf',
                        italics:
                          'https://mdn.alipayobjects.com/huamei_ptjqan/afts/file/A*RrWLR5c9EEcAAAAAAAAAAAAADkN6AQ/AlibabaPuHuiTi-3-55-Regular.ttf',
                        bolditalics:
                          'https://mdn.alipayobjects.com/huamei_ptjqan/afts/file/A*RrWLR5c9EEcAAAAAAAAAAAAADkN6AQ/AlibabaPuHuiTi-3-55-Regular.ttf',
                      },
                    }).download(),
                  );
                }}
              >
                导出 PDF
              </a>
            </Space>
          }
        >
          <div
            id="pdf"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              padding: 24,
            }}
          >
            <MessageRender
              value={value}
              drag
              itemRender={(defaultDom, node, index) => {
                if (index === 0 && node.type === 'heading') {
                  return <>{defaultDom}</>;
                }
                if (node.type !== 'heading') {
                  return (
                    <InvertTransition delay={index * 0.1}>
                      <EditCard
                        node={
                          node as NodeToSchemaType<{
                            report_id?: number;
                            id: number;
                          }>
                        }
                        defaultDom={defaultDom}
                      />
                    </InvertTransition>
                  );
                }
                return defaultDom;
              }}
            />
          </div>
        </Card>
      </div>
    </>
  );
};
