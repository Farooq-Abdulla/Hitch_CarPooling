import { Table } from '@radix-ui/themes'
import Image from 'next/image'

const ComparisonComp = () => {
    return (
        <div className='px-[349px] w-full  pb-[80px]'>
            <div>
                <h1 className='text-[56px] text-black font-bold leading-[64px]'>How we compare</h1>
            </div>
            <div className='pt-[48px]'>
                <Table.Root>
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell><Image src="/hitch_logo.webp" alt='Hitch Logo' width={100} height={150}></Image></Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell><Image src="/lyft_logo.png" alt='Hitch Logo' width={150} height={150}></Image></Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell><Image src="/uber_logo.png" alt='Hitch Logo' width={150} height={150}></Image></Table.ColumnHeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>

                        <Table.Row>
                            <Table.RowHeaderCell><p className='font-bold text-[20px] leading-[32px] py-4 px-4'>Distance</p></Table.RowHeaderCell>
                            <Table.Cell><p className='text-[16px] font-normal leading-[24px] text-[#212529] py-4'>Long Distance</p></Table.Cell>
                            <Table.Cell><p className='text-[16px] font-normal leading-[24px] text-[#212529] py-4'>Long Distance</p></Table.Cell>
                            <Table.Cell><p className='text-[16px] font-normal leading-[24px] text-[#212529] py-4'>Long Distance</p></Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell><p className='font-bold text-[20px] leading-[32px] p-4'>Mileage</p></Table.RowHeaderCell>
                            <Table.Cell><p className='text-[16px] font-normal leading-[24px] text-[#212529] py-4'>Highway</p></Table.Cell>
                            <Table.Cell><p className='text-[16px] font-normal leading-[24px] text-[#212529] py-4'>City</p></Table.Cell>
                            <Table.Cell><p className='text-[16px] font-normal leading-[24px] text-[#212529] py-4'>City</p></Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell><p className='font-bold text-[20px] leading-[32px] p-4'>Rates</p></Table.RowHeaderCell>
                            <Table.Cell><p className='text-[16px] font-normal leading-[24px] text-[#212529] py-4'>Transparent</p></Table.Cell>
                            <Table.Cell><p className='text-[16px] font-normal leading-[24px] text-[#212529] py-4'>Hidden</p></Table.Cell>
                            <Table.Cell><p className='text-[16px] font-normal leading-[24px] text-[#212529] py-4'>Hidden</p></Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell><p className='font-bold text-[20px] leading-[32px] p-4'>Idling</p></Table.RowHeaderCell>
                            <Table.Cell><p className='text-[16px] font-normal leading-[24px] text-[#212529] py-4'>Paid</p></Table.Cell>
                            <Table.Cell><p className='text-[16px] font-normal leading-[24px] text-[#212529] py-4'>Unpaid</p></Table.Cell>
                            <Table.Cell><p className='text-[16px] font-normal leading-[24px] text-[#212529] py-4'>Unpaid</p></Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell><p className='font-bold text-[20px] leading-[32px] p-4'>Choices</p></Table.RowHeaderCell>
                            <Table.Cell><p className='text-[16px] font-normal leading-[24px] text-[#212529] py-4'>You decide the destination</p></Table.Cell>
                            <Table.Cell><p className='text-[16px] font-normal leading-[24px] text-[#212529] py-4'>Company decides your destination</p></Table.Cell>
                            <Table.Cell><p className='text-[16px] font-normal leading-[24px] text-[#212529] py-4'>Company decides your destination</p></Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell><p className='font-bold text-[20px] leading-[32px] p-4'>Claiming</p></Table.RowHeaderCell>
                            <Table.Cell><p className='text-[16px] font-normal leading-[24px] text-[#212529] py-4'>Claim a ride in advance or on-demand</p></Table.Cell>
                            <Table.Cell><p className='text-[16px] font-normal leading-[24px] text-[#212529] py-4'>Claim rides only on-demand</p></Table.Cell>
                            <Table.Cell><p className='text-[16px] font-normal leading-[24px] text-[#212529] py-4'>Claim rides only on-demand</p></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table.Root>
            </div>
        </div>
    )
}

export default ComparisonComp