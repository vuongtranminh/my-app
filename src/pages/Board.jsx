import React from 'react';
import AssetLoan from '~/components/asset-loan/AssetLoan';
import Grid from '~/components/common/Grid';
import Table, { TableBody } from '~/components/common/Table';
import Tabs, { Tab, TabsContent, TabsNav, TabsPane } from '~/components/common/Tabs';
import Section, { SectionBody, SectionTitle } from '~/components/Section';

const Board = () => {
    return (
        <div className="asset-loan">
            <Tabs>
                <TabsNav>
                    <Tab>Số dư tài khoản</Tab>
                    <Tab>Thông tin tài sản và nợ</Tab>
                    <Tab>Tra cứu và xác nhận lệnh</Tab>
                </TabsNav>
                <TabsContent>
                    <TabsPane></TabsPane>
                    <TabsPane>
                        <div className="row">
                            <div className="col-3 col-md-6 col-sm-12">
                                <Section>
                                    <SectionTitle>
                                        <div className="text--head">Thông tin Tài sản và Nợ</div>
                                    </SectionTitle>
                                    <SectionBody>
                                        <div className="asset-loan__info">
                                            <AssetLoan />
                                        </div>
                                    </SectionBody>
                                </Section>
                            </div>
                            <div className="col-3 col-md-6 col-sm-12">
                                <Section>
                                    <SectionTitle>
                                        <div className="text--head">Thông tin Margin</div>
                                    </SectionTitle>
                                    <SectionBody></SectionBody>
                                </Section>
                            </div>
                            <div className="col-6 col-md-12 col-sm-12">
                                <Section>
                                    <SectionTitle>
                                        <div className="text--head">Chi tiết nợ vay</div>
                                    </SectionTitle>
                                    <SectionBody></SectionBody>
                                </Section>
                            </div>
                        </div>
                    </TabsPane>
                    <TabsPane></TabsPane>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Board;
