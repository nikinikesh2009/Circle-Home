"use client";

import { useRef } from 'react';
import { Playfair_Display } from 'next/font/google';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { BadgeCheck, CircleIcon, CheckCircle2, Download } from "lucide-react";
import QRCode from "qrcode.react";
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

const riskData = [
    { category: "Social Connection", impact: "87%", risk: "13%", description: "Builds real interest-based human connections" },
    { category: "AI Moderation", impact: "80%", risk: "20%", description: "Keeps spaces clean & relevant" },
    { category: "User Experience", impact: "90%", risk: "10%", description: "Designed for smooth, modern use" },
    { category: "Privacy & Security", impact: "85%", risk: "15%", description: "Built with user privacy in focus" },
    { category: "Community Growth", impact: "High", risk: "Medium", description: "Platform may scale globally, risks increase with expansion" },
];

export default function CertificatePage() {
    const certificateRef = useRef<HTMLDivElement>(null);
    const certificateId = "ACO-CRL-2025-001";
    const verificationUrl = typeof window !== "undefined" ? `${window.location.origin}/verify/${certificateId}`: '';

    const handleDownload = async () => {
        if (!certificateRef.current) return;

        const canvas = await html2canvas(certificateRef.current, { 
            scale: 2,
            backgroundColor: null // Use transparent background to capture aurora
        });
        const imgData = canvas.toDataURL('image/png');
        
        // A4 dimensions in pixels at 96 dpi are roughly 794x1123, but we can use the canvas aspect ratio
        const pdf = new jsPDF({
            orientation: 'p',
            unit: 'px',
            format: [canvas.width, canvas.height]
        });

        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save("Circle-Certificate-of-Release.pdf");
    };

    return (
        <div className={cn("w-full my-12 p-4 md:p-8", playfairDisplay.variable)}>
            <div className="flex justify-end mb-4">
                <Button onClick={handleDownload}>
                    <Download className="mr-2" />
                    Download Certificate
                </Button>
            </div>
             <Card ref={certificateRef} className="relative overflow-hidden bg-white dark:bg-background/70 border-2 border-primary/20 shadow-2xl p-4">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <CircleIcon className="text-primary/5 opacity-30 dark:opacity-10 h-[500px] w-[500px]" />
                </div>
                <CardHeader className="text-center relative z-10 p-8">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <CircleIcon className="h-10 w-10 text-primary" />
                        <span className="text-2xl font-bold font-headline">ACO Network</span>
                    </div>
                    <CardTitle className="font-serif text-3xl md:text-4xl flex items-center justify-center gap-3">
                        <BadgeCheck className="h-8 w-8 text-blue-500" />
                        Official Certificate of Release
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Official Record of Product Authorization
                    </CardDescription>
                     <Separator className="mt-6 bg-primary/20" />
                </CardHeader>

                <CardContent className="relative z-10 px-4 md:px-8 space-y-12">
                     {/* Certificate Details */}
                    <section>
                         <h2 className="text-2xl font-semibold font-headline mb-4">Certificate Details</h2>
                        <div className="grid md:grid-cols-[2fr_1fr] gap-8 items-center">
                            <Table className="bg-secondary/50 rounded-lg">
                                <TableBody>
                                    <TableRow>
                                        <TableHead className="font-bold w-1/3">Certificate ID</TableHead>
                                        <TableCell className="font-mono text-sm">ACO-CRL-2025-001</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHead className="font-bold">Project Name</TableHead>
                                        <TableCell>Circle</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHead className="font-bold">Issued By</TableHead>
                                        <TableCell>ACO Network</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHead className="font-bold">Classification</TableHead>
                                        <TableCell>Official Product</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHead className="font-bold">Release Date</TableHead>
                                        <TableCell>October 23, 2025</TableCell>
                                    </TableRow>
                                    <TableRow className="border-b-0">
                                        <TableHead className="font-bold">Status</TableHead>
                                        <TableCell>
                                            <span className="inline-flex items-center gap-2 font-semibold text-green-600">
                                                <CheckCircle2 className="h-5 w-5" /> Verified by ACO Network
                                            </span>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                             <div className="flex flex-col items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                                <p className="font-semibold text-sm">Verification</p>
                                <div className="bg-white p-2 rounded-md shadow-md">
                                    <QRCode value={verificationUrl} size={120} fgColor="#000" bgColor="#fff" />
                                </div>
                                <span className="text-xs text-muted-foreground text-center">Scan to verify authenticity</span>
                            </div>
                        </div>
                    </section>

                    {/* Reason for Release */}
                    <section className="text-center bg-secondary/30 p-6 rounded-lg">
                         <h2 className="text-2xl font-semibold font-headline mb-4">Reason for Release</h2>
                         <p className="max-w-3xl mx-auto text-muted-foreground">
                           Circle was officially created and released by ACO Network to solve real-world connection gaps by enabling individuals to build meaningful, focused communities.
                           Every ACO product is created with a single guiding belief:
                         </p>
                         <p className="font-serif text-2xl italic text-primary mt-4">
                           “If we ain’t, who do?”
                         </p>
                    </section>
                    
                    {/* Impact & Risk Analysis */}
                    <section>
                        <h2 className="text-2xl font-semibold font-headline mb-4">Impact & Risk Analysis</h2>
                        <div className="overflow-x-auto">
                            <Table className="bg-secondary/50 rounded-lg">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Category</TableHead>
                                        <TableHead className="text-center">Positive Impact %</TableHead>
                                        <TableHead className="text-center">Risk %</TableHead>
                                        <TableHead>Description</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {riskData.map(item => (
                                        <TableRow key={item.category}>
                                            <TableCell className="font-semibold">{item.category}</TableCell>
                                            <TableCell className="text-center font-medium text-green-600">{item.impact}</TableCell>
                                            <TableCell className="text-center font-medium text-amber-600">{item.risk}</TableCell>
                                            <TableCell className="text-muted-foreground">{item.description}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 italic">*Percentages are projected based on planned systems, early test data, and development logic.</p>
                    </section>

                    {/* Acknowledgement & Signatures */}
                    <section className="space-y-8">
                         <div className="text-center p-4 border border-border/50 rounded-lg bg-secondary/30">
                            <h3 className="font-bold mb-2">Acknowledgement of Risks</h3>
                            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                                ACO Network acknowledges that all technologies carry risk. We commit to identifying, managing, and resolving issues with integrity and speed. User trust, safety, and continuous improvement remain top priorities.
                            </p>
                        </div>

                         <div className="text-center">
                            <h3 className="text-lg font-semibold">Confirmed By:</h3>
                            <p className="font-serif text-2xl my-4">Founder of ACO Network Nikil Nikesh With Lising Montilla Ma Evelyn</p>
                            <div className="inline-flex items-center gap-2 text-sm font-bold text-green-600">
                                <BadgeCheck className="h-5 w-5" /> Verified by ACO Network
                            </div>
                        </div>
                    </section>

                     <Separator className="bg-primary/20" />

                    {/* Footer */}
                     <footer className="text-center space-y-4 pb-4">
                        <p className="font-serif text-2xl italic text-primary">“If we ain’t, who do?”</p>
                        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} ACO Network — All Rights Reserved.</p>
                        <p className="text-xs text-muted-foreground">This certificate confirms the authenticity and official release of Circle under ACO Network.</p>
                    </footer>
                </CardContent>
             </Card>
        </div>
    );
}
